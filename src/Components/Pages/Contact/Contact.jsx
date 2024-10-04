import "./Contact.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/home');
  };

  const [formData, setFormData] = useState({
    customerName: '',
    contactNumber: '',
    emailAddress: '',
    city: '',
    taluka: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contactNumber: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.taluka.trim()) {
      newErrors.taluka = 'Taluka is required';
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.info("Sending...");
      setIsSubmitting(true); // Set submitting state to true

      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      formDataToSend.append("access_key", "3086c577-5b4f-41b1-a79e-0810fdc7a167");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.success) {
          toast.dismiss();
          setTimeout(() => {
            toast.success("Form Submitted Successfully");
            setSuccessMessage("Thank you, " + formData.customerName + "! Your inquiry has been submitted.");
          }, 1000);

          setFormData({
            customerName: '',
            contactNumber: '',
            emailAddress: '',
            city: '',
            taluka: '',
            pincode: ''
          });
        } else {
          toast.dismiss();
          toast.error(`Error: ${data.message}`);
        }
      } catch (error) {
        toast.dismiss();
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };


  return (
    <div class="container contact-container">
      <div className='text-center'>
        <h5>Contact Us Royal Shetkari IT Company</h5>
        <p>If you have any queries related to our IT services, please contact us by filling out the form below or call us at the provided number.</p>
      </div>
      <div class="row contact-row">
        <div className="contact-column">
          <div className="form-main">
            <ToastContainer />
            <div className="container form-size my-5">
              <img
                src='https://i.postimg.cc/G25Fvy5s/icons8-back-48.png'
                alt="Back"
                onClick={handleBookNowClick}
                style={{ cursor: 'pointer', marginBottom: '20px' }}
              />

              <h2 className="text-center mb-4">Quick Inquiry</h2>
              <form className="p-4 shadow rounded form-container" onSubmit={handleSubmit}>
                <div className="form-row mb-3">
                  <div className="col-12">
                    <label htmlFor="customerName">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                      id="customerName"
                      placeholder="Enter your name"
                      value={formData.customerName}
                      onChange={handleChange}
                    />
                    {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={handlePhoneChange}
                    />
                    {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="email"
                      className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                      id="emailAddress"
                      placeholder="Enter email address"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                    {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-12">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="taluka">Taluka</label>
                    <input
                      type="text"
                      className={`form-control ${errors.taluka ? 'is-invalid' : ''}`}
                      id="taluka"
                      placeholder="Enter taluka"
                      value={formData.taluka}
                      onChange={handleChange}
                    />
                    {errors.taluka && <div className="invalid-feedback">{errors.taluka}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                      id="pincode"
                      placeholder="Enter pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                    {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className={`btn btn-primary mt-3 ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting} // Disable button while submitting
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  {successMessage && <div className="success-message mt-3">{successMessage}</div>} {/* Display success message */}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-column">
          <div class="contact-info">
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/fluent/48/000000/address.png" alt="Address Icon" />
              </div>
              <div class="details">
                <strong>ADDRESS</strong>
                A/p-: Kakdi, tal: Kopergon, dist: Ahamdnager, Near Shirdi International Airport
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/fluent/48/000000/email.png" alt="Email Icon" />
              </div>
              <div class="details">
                <strong>EMAIL ADDRESS</strong>
                royalshetkariitcompany@example.com
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="https://img.icons8.com/fluent/48/000000/phone.png" alt="Phone Icon" />
              </div>
              <div class="details">
                <strong>PHONE NO</strong>
                +91 1234567890<br />
                +91 9876543210
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
