import { ActionFunction, Form } from 'react-router-dom';
import Swal from 'sweetalert2';

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const password = formData.get('password');
  const password2 = formData.get('password2');

  if (password !== password2) {
    // Alert para contraseñas que no coinciden
    await Swal.fire({
      title: '¡Error!',
      text: 'Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.',
      icon: 'error',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d33'
    });
    
    console.error('Passwords do not match');
  } else {
    // Alert para formulario exitoso
    await Swal.fire({
      title: '¡Registro Exitoso!',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Password:</strong> ${password}</p>
      `,
      icon: 'success',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#3085d6'
    });
    
    console.log({ name, password, password2 });
  }

  return { status: 200 };
};
const Register = () => (
  <>
    <h2>Register</h2>
    <Form method='post'>
      <div className='form-field'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' required />
      </div>
      <div className='form-field'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />
      </div>
      <div className='form-field'>
        <label htmlFor='password2'>Confirm Password</label>
        <input type='password' name='password2' required />
      </div>
      <button id='register' type='submit'>
        Register
      </button>
    </Form>
  </>
);

Register.action = action;

export default Register;