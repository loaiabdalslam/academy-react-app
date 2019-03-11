
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react';

class SignForm extends Component {
  render() {
    return (

        


        <div className='container'>
        <h1>
          Basic{' '}
          <a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener">
            Formik
          </a>{' '}
          Demo
        </h1>
    
        <Formik
          initialValues={{ email: '' ,name:'',password:'',passwordConfirm:''}}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Email address is required Required'),
            name:Yup.string().
            max(8,'Name is Too Long').
            min(4,'Name is Too short').
            required('Name is Required'),
            password:Yup.string().
            required('Required'),
            passwordConfirm:Yup.string().
            oneOf([Yup.ref('password')],'Password Would Matches !').
              required('Required'),

          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (



        
                <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'form-control has-error' : 'form-control'
                  }
                />
                {errors.email &&
                  touched.email && <div className="input-feedback">{errors.email}</div>}
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'form-control has-error' : 'form-control'
                  }
                />
                {errors.name &&
                  touched.name && <div className="has-error">{errors.name}</div>}
  </div>

  <div class="form-group form-check">
  <input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'form-control has-error' : 'form-control'
                  }
                />
                {errors.password &&
                  touched.password && <div className="has-error">{errors.password}</div>}
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>



  <div class="form-group form-check">
  <input
                  id="passwordConfirm"
                  placeholder="Enter your password again"
                  type="password"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.passwordConfirm && touched.passwordConfirm ? 'form-control has-error' : 'form-control'
                  }
                />
                {errors.passwordConfirm &&
                  touched.passwordConfirm && <div className="has-error">{errors.passwordConfirm}</div>}
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>


        
    
                <button
                  type="btn btn-primary"
                  className="btn btn-primary"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button class ="btn btn-primary" type="submit" disabled={!dirty || isSubmitting}>
                  Submit
                </button>
    
              </form>
            );
          }}
        </Formik>
    
      </div>



      
      
    );
  }
}

export default SignForm;
