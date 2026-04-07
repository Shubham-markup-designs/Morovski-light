import { useFormik } from 'formik';

const NewsletterForm = () => {
  // Formik setup with manual validation and submission logic
  const formik = useFormik<{ email: string }>({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: { email?: string } = {};
      if (!values.email) {
        errors.email = 'Email address is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Please enter a valid email address';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      // Clear any previous status
      setStatus(null);
      
      // Simulate an API call
      setTimeout(() => {
        console.log('Subscribed with:', values.email);
        setStatus({ success: 'Thank you for subscribing!' });
        setSubmitting(false);
        resetForm();
        
        // Optional: clear the success message after a few seconds
        setTimeout(() => setStatus(null), 5000);
      }, 1000);
    },
  });

  return (
    // Background color roughly matching the image
    <div className="w-full bg-[#9f815b] py-20 px-4 flex flex-col items-center justify-center font-serif">
      <div className="max-w-2xl w-full text-center">
        
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl mb-10 tracking-wide">
          Subscribe To Our Mailing List For Exciting Offers
        </h2>

        {/* Formik Form */}
        <form 
          onSubmit={formik.handleSubmit} 
          className="max-w-xl mx-auto relative flex flex-col items-center"
        >
          <div className="relative w-full">
            {/* Input Field */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="EMAIL"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={formik.isSubmitting}
              className={`w-full bg-transparent border rounded-full py-4 pl-8 pr-16 text-white placeholder-white placeholder:text-sm placeholder:tracking-widest focus:outline-none focus:ring-1 focus:ring-white transition-all
                ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-300 focus:ring-red-300'
                    : 'border-white focus:ring-white'
                }`}
            />
            
            {/* Submit Arrow Button */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              aria-label="Submit subscription"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity disabled:opacity-50"
            >
              {formik.isSubmitting ? (
                // Simple loading spinner when submitting
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                // Long right arrow SVG matching the design
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <polyline points="15 5 22 12 15 19"></polyline>
                </svg>
              )}
            </button>
          </div>

          {/* Validation Error Message */}
          <div className="h-6 mt-2 text-sm">
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-200">{formik.errors.email}</span>
            ) : formik.status?.success ? (
              <span className="text-green-200">{formik.status.success}</span>
            ) : null}
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;