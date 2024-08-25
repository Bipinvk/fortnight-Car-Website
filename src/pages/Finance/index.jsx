import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, CalendarIcon } from "lucide-react";
import emailjs from "emailjs-com";

const CarFinanceApplication = () => {
  const location = useLocation();
  const car = location.state?.car;

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "email",
      "phone",
      "visaType",
      "employerName",
      "employerContact",
      "jobType",
      "income",
      "incomeFrequency",
      "expenses",
      "expensesFrequency",
      "streetNumber",
      "streetName",
      "suburb",
      "postcode",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    emailjs.init("bdNTHW-2fQM1jdA9u");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send email
        await sendEmail(formData);

        // Send WhatsApp message
        // await sendWhatsApp(formData);

        // Show success message to user
        alert(
          "Application submitted successfully! An insurance application is being processed."
        );
        setFormData({});
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const sendEmail = async (data) => {
    try {
      const result = await emailjs.send("service_2fxwpij", "template_vwrddm6", {
        to_email: "fortunecars100@gmail.com",
        from_name: `${data.firstName} ${data.lastName}`,
        message: JSON.stringify(data, null, 2),
      });
      console.log("Email sent successfully:", result.text);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const sendWhatsApp = async (data) => {
    const messageData = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const encodedMessage = encodeURIComponent(messageData);
    const whatsappNumber = "9048491610"; // Replace with the actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {car && (
            <div className="p-6 bg-gray-50 border-b text-black border-gray-200">
              <h2 className="text-xl font-bold mb-4">Selected Car Details</h2>
              <p>
                <strong>Make:</strong> {car.name}
              </p>
              <p>
                <strong>Model:</strong> {car.type}
              </p>
              <p>
                <strong>Year:</strong> {car.year}
              </p>
              <p>
                <strong>Price:</strong> ${car.price}
              </p>
            </div>
          )}
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Car Finance Application
            </h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded">
              <p className="font-bold mb-2">Important Information</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  We take your privacy seriously. All information is encrypted
                  and stored securely.
                </li>
                <li>
                  Please ensure all details are accurate to avoid processing
                  delays.
                </li>
              </ul>
            </div>

            <Form.Root onSubmit={handleSubmit} className="space-y-8">
              <PersonalDetails onChange={handleInputChange} errors={errors} />
              <VisaInformation onChange={handleInputChange} errors={errors} />
              <EmploymentDetails onChange={handleInputChange} errors={errors} />
              <IncomeAndExpenses onChange={handleInputChange} errors={errors} />
              <AddressInformation
                onChange={handleInputChange}
                errors={errors}
              />

              <div className="flex mt-8 justify-end w-full">
                <div className="flex gap-2 sm:w-full md:w-1/2 lg:1/2">
                  <button className="w-full border border-red-200 bg-red-100 text-red-500  px-6 py-3 rounded-lg  hover:bg-red-200 transition duration-300 ">
                    Cancel
                  </button>
                  <Form.Submit asChild>
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg  hover:bg-blue-700 transition duration-300 ">
                      Submit Application
                    </button>
                  </Form.Submit>
                </div>
              </div>
            </Form.Root>

            <div className="mt-8 text-sm text-gray-600">
              <h2 className="font-semibold mb-2 text-lg">Guidelines:</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Complete all sections of the application form accurately.
                </li>
                <li>
                  Ensure you have all necessary documents ready for upload if
                  required.
                </li>
                <li>Double-check all entered information before submission.</li>
                <li>
                  If you need to pause, your progress will be saved for 24
                  hours.
                </li>
              </ul>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <h2 className="font-semibold mb-2 text-lg">Security Note:</h2>
              <p>
                Your security is our priority. We use industry-standard
                encryption to protect your data. We will never share your
                information with third parties without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const FormSection = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>
  </section>
);

const FormField = ({
  label,
  name,
  type = "text",
  onChange,
  options,
  error,
  required = false,
  value,
}) => {
  const handleChange = (newValue) => {
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <Select.Root onValueChange={(value) => handleChange(value)}>
          <Select.Trigger
            className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label={label}
          >
            <Select.Value placeholder="Select an option" />
            <Select.Icon>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
              <Select.Viewport className="p-1">
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className="relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md cursor-default select-none hover:bg-blue-50 focus:bg-blue-100"
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon className="w-4 h-4" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      ) : type === "date" ? (
        <div className="relative">
          <input
            type="date"
            id={name}
            name={name}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            required={required}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className={`w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

const PersonalDetails = ({ onChange, errors }) => (
  <FormSection title="Personal Details">
    <FormField
      label="First Name"
      name="firstName"
      onChange={onChange}
      error={errors.firstName}
      required
    />
    <FormField
      label="Last Name"
      name="lastName"
      onChange={onChange}
      error={errors.lastName}
      required
    />
    <FormField
      label="Date of Birth"
      name="dateOfBirth"
      type="date"
      onChange={onChange}
      error={errors.dateOfBirth}
      required
    />
    <FormField
      label="Email Address"
      name="email"
      type="email"
      onChange={onChange}
      error={errors.email}
      required
    />
    <FormField
      label="Phone Number"
      name="phone"
      type="tel"
      onChange={onChange}
      error={errors.phone}
      required
    />
  </FormSection>
);

const VisaInformation = ({ onChange, errors }) => (
  <FormSection title="Visa Information">
    <FormField
      label="Visa Type / Residential Status"
      name="visaType"
      type="select"
      onChange={onChange}
      options={[
        { value: "citizen", label: "Citizen" },
        { value: "permanent-resident", label: "Permanent Resident" },
        { value: "work-visa", label: "Work Visa" },
        { value: "student-visa", label: "Student Visa" },
      ]}
      error={errors.visaType}
      required
    />
    <FormField
      label="Visa Start Date"
      name="visaStartDate"
      type="date"
      onChange={onChange}
      error={errors.visaStartDate}
    />
    <FormField
      label="Visa Expiry Date"
      name="visaExpiryDate"
      type="date"
      onChange={onChange}
      error={errors.visaExpiryDate}
    />
  </FormSection>
);

const EmploymentDetails = ({ onChange, errors }) => (
  <FormSection title="Employment Details">
    <FormField
      label="Current Employer Name"
      name="employerName"
      onChange={onChange}
      error={errors.employerName}
      required
    />
    <FormField
      label="Employer Contact Number"
      name="employerContact"
      type="tel"
      onChange={onChange}
      error={errors.employerContact}
      required
    />
    <FormField
      label="Time with Employer"
      name="timeWithEmployer"
      onChange={onChange}
      error={errors.timeWithEmployer}
    />
    <FormField
      label="Job Type"
      name="jobType"
      type="select"
      onChange={onChange}
      options={[
        { value: "full-time-permanent", label: "Full-time Permanent" },
        { value: "part-time-permanent", label: "Part-time Permanent" },
        { value: "contract", label: "Contract" },
        { value: "casual", label: "Casual" },
      ]}
      error={errors.jobType}
      required
    />
  </FormSection>
);

const IncomeAndExpenses = ({ onChange, errors }) => (
  <FormSection title="Income and Expenses">
    <FormField
      label="Income (after tax)"
      name="income"
      type="number"
      onChange={onChange}
      error={errors.income}
      required
    />
    <FormField
      label="Income Frequency"
      name="incomeFrequency"
      type="select"
      onChange={onChange}
      options={[
        { value: "weekly", label: "Weekly" },
        { value: "fortnightly", label: "Fortnightly" },
        { value: "monthly", label: "Monthly" },
      ]}
      error={errors.incomeFrequency}
      required
    />
    <FormField
      label="Total Expenses"
      name="expenses"
      type="number"
      onChange={onChange}
      error={errors.expenses}
      required
    />
    <FormField
      label="Expenses Frequency"
      name="expensesFrequency"
      type="select"
      onChange={onChange}
      options={[
        { value: "weekly", label: "Weekly" },
        { value: "fortnightly", label: "Fortnightly" },
        { value: "monthly", label: "Monthly" },
      ]}
      error={errors.expensesFrequency}
      required
    />
  </FormSection>
);

const AddressInformation = ({ onChange, errors }) => (
  <FormSection title="Address Information">
    <FormField
      label="Street Number"
      name="streetNumber"
      onChange={onChange}
      error={errors.streetNumber}
      required
    />
    <FormField
      label="Street Name"
      name="streetName"
      onChange={onChange}
      error={errors.streetName}
      required
    />
    <FormField
      label="Suburb"
      name="suburb"
      onChange={onChange}
      error={errors.suburb}
      required
    />
    <FormField
      label="Postcode"
      name="postcode"
      onChange={onChange}
      error={errors.postcode}
      required
    />
    <FormField
      label="Time at Current Address"
      name="timeAtAddress"
      onChange={onChange}
    />
  </FormSection>
);

export default CarFinanceApplication;
