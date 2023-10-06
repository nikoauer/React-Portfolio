import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    return (
<div className="container">
  <h1 className="text-center">Contact</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input 
        type="text" 
        className="form-control" 
        id="name" 
        placeholder="What is your name?" 
        {...register("name", { required: true, minLength: 2 })}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input 
        type="email" 
        className="form-control" 
        id="email" 
        placeholder="Email" 
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea 
        className="form-control" 
        id="message" 
        rows="5" 
        {...register("message", { required: true, minLength: 5, maxLength: 300 })}
      ></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
    );
  }

