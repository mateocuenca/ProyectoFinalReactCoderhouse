import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { addDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { v4 } from "uuid";

const Checkout = ({ ordersCollectionRef, cartProducts, subtotal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const nameRegExp = /^[a-z ,.'-]+$/i;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const checkoutSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(nameRegExp, "First name is not valid")
      .required("Required"),

    lastName: Yup.string()
      .matches(nameRegExp, "Last name is not valid")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),

    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
  });

  const toast = useToast();

  /* 
  Al clickear realizar compra debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden. */
  /* 
  orders: las órdenes generadas, que deben incluir los
productos, descripciones y los precios al momento de la compra. (Id, items (remerax2), fecha, estado) */

  const sendCheckoutData = async (values) => {
    let resultArray = [];
    for (let i = 0; i < cartProducts.length; i++) {
      let cartProduct = cartProducts[i];
      let str = cartProduct.title + "x" + cartProduct.quantity;
      resultArray.push(str);
    }
    let cartProductsString = resultArray.join(";");
    const timestamp = serverTimestamp();
    //generate a random 6 digit number for orderId
    const orderId = (
      "000000" + parseInt(v4().replace(/-/g, "").substring(0, 6), 16)
    ).slice(-6);
    const docRef = await addDoc(ordersCollectionRef, {
      orderId: orderId,
      ...values,
      timestamp: timestamp,
      total: subtotal,
      productsXquantity: cartProductsString,
      status: "pendingPayment",
    });
    const docSnap = await getDoc(docRef);
    toast({
      title: `${docSnap.data().orderId} is your order id`,
      status: "success",
      isClosable: true,
    });
    alert(`${docSnap.data().orderId} is your order id`);
  };

  return (
    <>
      <Button
        colorScheme="teal"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={onOpen}
      >
        Checkout
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                confirmEmail: "",
              }}
              validationSchema={checkoutSchema}
              onSubmit={(values) => {
                sendCheckoutData(values);
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form>
                  <Field name="firstName">
                    {({ field }) => (
                      <FormControl
                        isRequired
                        isInvalid={errors.firstName && touched.firstName}
                      >
                        <FormLabel>First name</FormLabel>
                        <Input
                          {...field}
                          ref={initialRef}
                          focusBorderColor="teal"
                        />
                        {!errors.firstName && touched.firstName ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>
                            {errors.firstName}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field }) => (
                      <FormControl
                        isRequired
                        isInvalid={errors.lastName && touched.lastName}
                        pt={4}
                      >
                        <FormLabel>Last name</FormLabel>
                        <Input {...field} focusBorderColor="teal" />
                        {!errors.lastName && touched.lastName ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field }) => (
                      <FormControl
                        isRequired
                        isInvalid={errors.phone && touched.phone}
                        pt={4}
                      >
                        <FormLabel>Phone number</FormLabel>
                        <Input {...field} focusBorderColor="teal" />
                        {!errors.phone && touched.phone ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>{errors.phone}</FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl
                        isRequired
                        isInvalid={errors.email && touched.email}
                        pt={4}
                      >
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor="teal"
                          onChange={handleChange}
                        />
                        {!errors.email && touched.email ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>{errors.email}</FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="confirmEmail">
                    {({ field }) => (
                      <FormControl
                        isRequired
                        isInvalid={values.email !== values.confirmEmail}
                        pt={4}
                      >
                        <FormLabel>Confirm Email</FormLabel>
                        <Input {...field} focusBorderColor="teal" />
                        {!(values.email !== values.confirmEmail) ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage>
                            {"Please enter same email"}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    colorScheme="teal"
                    mt={5}
                    mx="60%"
                    type="submit"
                    variant={
                      (Object.values(errors).join("&&") &&
                        Object.values(touched).join("&&")) ||
                      values.email !== values.confirmEmail
                        ? "outline"
                        : "solid"
                    }
                  >
                    Go to payment
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;
