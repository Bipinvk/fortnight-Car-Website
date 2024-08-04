import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { saveToExcel } from "./excelcomponent";
import Navbar from "../../components/Navbar";

const CarFinanceApplication = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
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

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToExcel(formData);
    if (validateForm()) {
      console.log(formData);
      saveToExcel(formData);
      // Show success message to user
      alert("Application submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
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

              <div className="mt-8">
                <Form.Submit asChild>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
                    Submit Application
                  </button>
                </Form.Submit>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </section>
);

const FormField = ({
  label,
  name,
  type = "text",
  onChange,
  options,
  error,
}) => (
  <Form.Field name={name} className="flex flex-col">
    <Form.Label className="mb-1 text-sm font-medium text-gray-700">
      {label}
    </Form.Label>
    <Form.Control asChild>
      {type === "select" ? (
        <Select.Root
          onValueChange={(value) => onChange({ target: { name, value } })}
        >
          <Select.Trigger className="input-style flex justify-between items-center">
            <Select.Value placeholder="Select an option" />
            <Select.Icon>
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
              <Select.Viewport className="p-1">
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className="relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md cursor-default select-none hover:bg-blue-500 hover:text-white"
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      ) : (
        <input type={type} className="input-style" onChange={onChange} />
      )}
    </Form.Control>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </Form.Field>
);

const PersonalDetails = ({ onChange ,errors}) => (
  <FormSection title="Personal Details">
    <FormField
      label="First Name"
      name="firstName"
      onChange={onChange}
      error={errors.firstName}
    />
    <FormField
      label="Last Name"
      name="lastName"
      onChange={onChange}
      error={errors.lastName}
    />
    <FormField
      label="Date of Birth"
      name="dateOfBirth"
      type="date"
      onChange={onChange}
      error={errors.dateOfBirth}
    />
    <FormField
      label="Email Address"
      name="email"
      type="email"
      onChange={onChange}
      error={errors.email}
    />
    <FormField
      label="Phone Number"
      name="phone"
      type="tel"
      onChange={onChange}
      error={errors.phone}
    />
  </FormSection>
);

const VisaInformation = ({ onChange ,errors}) => (
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

const EmploymentDetails = ({ onChange,errors }) => (
  <FormSection title="Employment Details">
    <FormField
      label="Current Employer Name"
      name="employerName"
      onChange={onChange}
      error={errors.employerName}
    />
    <FormField
      label="Employer Contact Number"
      name="employerContact"
      type="tel"
      onChange={onChange}
      error={errors.employerContact}
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
    />
  </FormSection>
);

const IncomeAndExpenses = ({ onChange,errors }) => (
  <FormSection title="Income and Expenses">
    <FormField
      label="Income (after tax)"
      name="income"
      type="number"
      onChange={onChange}
      error={errors.income}
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
    />
    <FormField
      label="Total Expenses"
      name="expenses"
      type="number"
      onChange={onChange}
      error={errors.expenses}
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
    />
  </FormSection>
);

const AddressInformation = ({ onChange, errors }) => (
  <FormSection title="Address Information">
   
    <FormField
      label="Street Name"
      name="streetName"
      onChange={onChange}
      error={errors.streetName}
    />
    <FormField
      label="Suburb"
      name="suburb"
      onChange={onChange}
      error={errors.suburb}
    />
    <FormField
      label="Postcode"
      name="postcode"
      onChange={onChange}
      error={errors.postcode}
    />
    <FormField
      label="Time at Current Address"
      name="timeAtAddress"
      onChange={onChange}
    />
  </FormSection>
);

export default CarFinanceApplication;
