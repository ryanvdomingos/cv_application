// src/components/PersonalForm.jsx

function PersonalForm({ personalInfo, onChange }) {
  return (
    <form className="personal-form">
      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName" /* Matches the state key */
          value={personalInfo.fullName}
          onChange={onChange}
          placeholder="First and Last Name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={onChange}
          placeholder="example@email.com"
        />
      </div>

      <div className="input-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={onChange}
          placeholder="+55 (21) 99999-9999"
        />
      </div>

      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={onChange}
          placeholder="City, Country"
        />
      </div>
    </form>
  );
}

export default PersonalForm;
