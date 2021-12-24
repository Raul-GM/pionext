import React from 'react';
import Layout from '../components/layout/Layout';
import LabelInput from '../components/ui/LabelInput';
import Button from '../components/ui/Button';

const Login = () => {
    return (
        <div>
            <Layout>
                <form>
                    <LabelInput 
                        props={{
                            label: 'Nombre',
                            id: 'nombre',
                            placeholder: 'Tu nombre',
                        }}
                    />
                    <LabelInput 
                        props={{
                            label: 'Email',
                            id: 'email',
                            placeholder: 'xxxxx@xxxx.xxx',
                            type: 'email'
                        }}
                    />
                     <LabelInput 
                        props={{
                            label: 'Password',
                            id: 'password',
                            placeholder: '*******',
                            type: 'password'
                        }}
                    />
                    <Button
                        props={{
                            label: 'Crear cuenta'
                        }}
                    />
                </form>
            </Layout>
        </div>
    )
}

export default Login;