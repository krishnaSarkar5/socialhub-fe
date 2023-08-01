import React from 'react'
import { Formik, Field } from "formik";
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage
} from '@chakra-ui/react'
import login from '../../assets/login.gif'
import SVGComponent from './LoginSVGComponent'

export default function Login() {

  const navigate = useNavigate();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>


          <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
          }}
        >

        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Field
            bg="none"
            border="1px"
            borderColor="#F1F1F1"
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
            {/* <Input type="email" /> */}
          </FormControl>


          <FormControl id="password" isInvalid={!!errors.password && touched.password}>
            <FormLabel>Password</FormLabel>
            {/* <Input type="password" /> */}
            <Field bg="none"
                border="1px"
                borderColor="#F1F1F1"
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }
                      console.log(error)
                      return error;
                    }}
                  />
                  {console.log(errors)}
                   <FormErrorMessage>{errors?.password}</FormErrorMessage>
          </FormControl>

          
          <Stack spacing={6}>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
             <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>

            <Button colorScheme={'blue'} variant={'solid'} type='submit'>
              Sign in
            </Button>
            <Text color={'blue.500'} onClick={()=>navigate("/register")} cursor='pointer'>Don't have an account?</Text>
          </Stack>

          </form>
        )}

        </Formik>




          










        </Stack> 
      </Flex>
      <Flex flex={1}>
        <SVGComponent/>
      </Flex>
    </Stack>
  )
}