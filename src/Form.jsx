import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  FormGroup,
  Button,
} from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
});

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = [
  { value: 'afghanistan', label: 'Afghanistan' },
{ value: 'albania', label: 'Albania' },
{ value: 'algeria', label: 'Algeria' },
{ value: 'andorra', label: 'Andorra' },
{ value: 'angola', label: 'Angola' },
{ value: 'antigua_and_barbuda', label: 'Antigua and Barbuda' },
{ value: 'argentina', label: 'Argentina' },
{ value: 'armenia', label: 'Armenia' },
{ value: 'australia', label: 'Australia' },
{ value: 'austria', label: 'Austria' },
{ value: 'azerbaijan', label: 'Azerbaijan' },
{ value: 'bahamas', label: 'Bahamas' },
{ value: 'bahrain', label: 'Bahrain' },
{ value: 'bangladesh', label: 'Bangladesh' },
{ value: 'barbados', label: 'Barbados' },
{ value: 'belarus', label: 'Belarus' },
{ value: 'belgium', label: 'Belgium' },
{ value: 'belize', label: 'Belize' },
{ value: 'benin', label: 'Benin' },
{ value: 'bhutan', label: 'Bhutan' },
{ value: 'bolivia', label: 'Bolivia' },
{ value: 'bosnia_and_herzegovina', label: 'Bosnia and Herzegovina' },
{ value: 'botswana', label: 'Botswana' },
{ value: 'brazil', label: 'Brazil' },
{ value: 'brunei', label: 'Brunei' },
{ value: 'bulgaria', label: 'Bulgaria' },
{ value: 'burkina_faso', label: 'Burkina Faso' },
{ value: 'burundi', label: 'Burundi' },
{ value: 'cabo_verde', label: 'Cabo Verde' },
{ value: 'cambodia', label: 'Cambodia' },
{ value: 'cameroon', label: 'Cameroon' },
{ value: 'canada', label: 'Canada' },
{ value: 'central_african_republic', label: 'Central African Republic' },
{ value: 'chad', label: 'Chad' },
{ value: 'chile', label: 'Chile' },
{ value: 'china', label: 'China' },
{ value: 'colombia', label: 'Colombia' },
{ value: 'comoros', label: 'Comoros' },
{ value: 'congo', label: 'Congo' },
{ value: 'costa_rica', label: 'Costa Rica' },
{ value: 'croatia', label: 'Croatia' },
{ value: 'cuba', label: 'Cuba' },
{ value: 'cyprus', label: 'Cyprus' },
{ value: 'czech_republic', label: 'Czech Republic' },
{ value: 'denmark', label: 'Denmark' },
{ value: 'djibouti', label: 'Djibouti' },
{ value: 'dominica', label: 'Dominica' },
{ value: 'dominican_republic', label: 'Dominican Republic' },
{ value: 'east_timor', label: 'East Timor' },
{ value: 'ecuador', label: 'Ecuador' },
{ value: 'egypt', label: 'Egypt' },
{ value: 'el_salvador', label: 'El Salvador' },
{ value: 'equatorial_guinea', label: 'Equatorial Guinea' },
{ value: 'eritrea', label: 'Eritrea' },
{ value: 'estonia', label: 'Estonia' },
{ value: 'eswatini', label: 'Eswatini' },
{ value: 'ethiopia', label: 'Ethiopia' },
{ value: 'fiji', label: 'Fiji' },
{ value: 'finland', label: 'Finland' },
{ value: 'france', label: 'France' },
{ value: 'gabon', label: 'Gabon' },
{ value: 'gambia', label: 'Gambia' },
{ value: 'georgia', label: 'Georgia' },
{ value: 'germany', label: 'Germany' },
{ value: 'ghana', label: 'Ghana' },
{ value: 'greece', label: 'Greece' },
{ value: 'grenada', label: 'Grenada' },
{ value: 'guatemala', label: 'Guatemala' },
{ value: 'guinea', label: 'Guinea' },
{ value: 'guinea_bissau', label: 'Guinea-Bissau' },
{ value: 'guyana', label: 'Guyana' },
{ value: 'haiti', label: 'Haiti' },
{ value: 'honduras', label: 'Honduras' },
{ value: 'hungary', label: 'Hungary' },
{ value: 'iceland', label: 'Iceland' },
{ value: 'india', label: 'India' },
{ value: 'indonesia', label: 'Indonesia' },
{ value: 'iran', label: 'Iran' },
{ value: 'iraq', label: 'Iraq' },
{ value: 'ireland', label: 'Ireland' },
{ value: 'israel', label: 'Israel' },
{ value: 'italy', label: 'Italy' },
{ value: 'jamaica', label: 'Jamaica' },
{ value: 'japan', label: 'Japan' },
{ value: 'jordan', label: 'Jordan' },
{ value: 'kazakhstan', label: 'Kazakhstan' },
{ value: 'kenya', label: 'Kenya' },
{ value: 'kiribati', label: 'Kiribati' },
{ value: 'korea_north', label: 'Korea, North' },
{ value: 'korea_south', label: 'Korea, South' },
{ value: 'kosovo', label: 'Kosovo' },
{ value: 'kuwait', label: 'Kuwait' },
{ value: 'kyrgyzstan', label: 'Kyrgyzstan' },
{ value: 'laos', label: 'Laos' },
{ value: 'latvia', label: 'Latvia' },
{ value: 'lebanon', label: 'Lebanon' },
{ value: 'lesotho', label: 'Lesotho' },
{ value: 'liberia', label: 'Liberia' },
{ value: 'libya', label: 'Libya' },
{ value: 'liechtenstein', label: 'Liechtenstein' },
{ value: 'lithuania', label: 'Lithuania' },
{ value: 'luxembourg', label: 'Luxembourg' },
{ value: 'madagascar', label: 'Madagascar' },
{ value: 'malawi', label: 'Malawi' },
{ value: 'malaysia', label: 'Malaysia' },
{ value: 'maldives', label: 'Maldives' },
{ value: 'mali', label: 'Mali' },
{ value: 'malta', label: 'Malta' },
{ value: 'marshall_islands', label: 'Marshall Islands' },
{ value: 'mauritania', label: 'Mauritania' },
{ value: 'mauritius', label: 'Mauritius' },
{ value: 'mexico', label: 'Mexico' },
{ value: 'micronesia', label: 'Micronesia' },
{ value: 'moldova', label: 'Moldova' },
{ value: 'monaco', label: 'Monaco' },
{ value: 'mongolia', label: 'Mongolia' },
{ value: 'montenegro', label: 'Montenegro' },
{ value: 'morocco', label: 'Morocco' },
{ value: 'mozambique', label: 'Mozambique' },
{ value: 'myanmar', label: 'Myanmar' },
{ value: 'namibia', label: 'Namibia' },
{ value: 'nauru', label: 'Nauru' },
{ value: 'nepal', label: 'Nepal' },
{ value: 'netherlands', label: 'Netherlands' },
{ value: 'new_zealand', label: 'New Zealand' },
{ value: 'nicaragua', label: 'Nicaragua' },
{ value: 'niger', label: 'Niger' },
{ value: 'nigeria', label: 'Nigeria' },
{ value: 'north_macedonia', label: 'North Macedonia' },
{ value: 'norway', label: 'Norway' },
{ value: 'pakistan', label: 'Pakistan' },
{ value: 'palau', label: 'Palau' },
{ value: 'panama', label: 'Panama' },
{ value: 'papua_new_guinea', label: 'Papua New Guinea' },
{ value: 'paraguay', label: 'Paraguay' },
{ value: 'peru', label: 'Peru' },
{ value: 'philippines', label: 'Philippines' },
{ value: 'poland', label: 'Poland' },
{ value: 'portugal', label: 'Portugal' },
{ value: 'qatar', label: 'Qatar' },
{ value: 'romania', label: 'Romania' },
{ value: 'russia', label: 'Russia' },
{ value: 'rwanda', label: 'Rwanda' },
{ value: 'saint_kitts_and_nevis', label: 'Saint Kitts and Nevis' },
{ value: 'saint_lucia', label: 'Saint Lucia' },
{ value: 'saint_vincent_and_the_grenadines', label: 'Saint Vincent and the Grenadines' },
{ value: 'samoa', label: 'Samoa' },
{ value: 'san_marino', label: 'San Marino' },
{ value: 'sao_tome_and_principe', label: 'Sao Tome and Principe' },
{ value: 'saudi_arabia', label: 'Saudi Arabia' },
{ value: 'senegal', label: 'Senegal' },
{ value: 'serbia', label: 'Serbia' },
{ value: 'seychelles', label: 'Seychelles' },
{ value: 'sierra_leone', label: 'Sierra Leone' },
{ value: 'singapore', label: 'Singapore' },
{ value: 'slovakia', label: 'Slovakia' },
{ value: 'slovenia', label: 'Slovenia' },
{ value: 'solomon_islands', label: 'Solomon Islands' },
{ value: 'somalia', label: 'Somalia' },
{ value: 'south_africa', label: 'South Africa' },
{ value: 'south_sudan', label: 'South Sudan' },
{ value: 'spain', label: 'Spain' },
{ value: 'sri_lanka', label: 'Sri Lanka' },
{ value: 'sudan', label: 'Sudan' },
{ value: 'suriname', label: 'Suriname' },
{ value: 'sweden', label: 'Sweden' },
{ value: 'switzerland', label: 'Switzerland' },
{ value: 'syria', label: 'Syria' },
{ value: 'taiwan', label: 'Taiwan' },
{ value: 'tajikistan', label: 'Tajikistan' },
{ value: 'tanzania', label: 'Tanzania' },
{ value: 'togo', label: 'Togo' },
{ value: 'tonga', label: 'Tonga' },
{ value: 'trinidad_and_tobago', label: 'Trinidad and Tobago' },
{ value: 'tunisia', label: 'Tunisia' },
{ value: 'turkey', label: 'Turkey' },
{ value: 'turkmenistan', label: 'Turkmenistan' },
{ value: 'tuvalu', label: 'Tuvalu' },
{ value: 'uganda', label: 'Uganda' },
{ value: 'ukraine', label: 'Ukraine' },
{ value: 'united_arab_emirates', label: 'United Arab Emirates' },
{ value: 'united_kingdom', label: 'United Kingdom' },
{ value: 'united_states', label: 'United States' },
{ value: 'uruguay', label: 'Uruguay' },
{ value: 'uzbekistan', label: 'Uzbekistan' },
{ value: 'vanuatu', label: 'Vanuatu' },
{ value: 'vatican_city', label: 'Vatican City' },
{ value: 'venezuela', label: 'Venezuela' },
{ value: 'vietnam', label: 'Vietnam' },
{ value: 'yemen', label: 'Yemen' },
{ value: 'zambia', label: 'Zambia' },
{ value: 'zimbabwe', label: 'Zimbabwe' }
];

const hobbies = [
  { value: 'reading', label: 'Reading' },
  { value: 'sports', label: 'Sports' },
  { value: 'music', label: 'Music' }
];

const Form = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className='Container'>
        <h1 >User Information Form</h1>
      <form className="form-container" onSubmit={formik.handleSubmit}>
  <div className="form-field name-class">
    <TextField
      label="Name"
      name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
    />
  </div>

  <div className="form-field address-class">
    <TextField
      label="Address"
      name="address"
      multiline
      rows={4}
      value={formik.values.address}
      onChange={formik.handleChange}
      error={formik.touched.address && Boolean(formik.errors.address)}
      helperText={formik.touched.address && formik.errors.address}
    />
  </div>

  <div className="form-field rooter">
    <FormControl style={{ width: "120px" }}>
      <InputLabel >Country</InputLabel>
      <Select
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        error={formik.touched.country && Boolean(formik.errors.country)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country.value} value={country.value}>
            {country.label}
          </MenuItem>
        ))}
      </Select>
      {formik.touched.country && formik.errors.country && (
        <div class="error">{formik.errors.country}</div>
      )}
    </FormControl>
  </div>
  
  <FormControl component="fieldset">
          <FormLabel component="legend" class="legend">Gender *</FormLabel>
          <RadioGroup
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </FormControl>

  
  <div className="form-field" id="bar">
          <InputLabel>Hobbies/Interests</InputLabel>
          <Select
            multiple
            name="hobbies"
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
            renderValue={(selected) => selected.join(', ')}
          >
            {hobbies.map((hobby) => (
              <MenuItem key={hobby.value} value={hobby.value}>
                {hobby.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.hobbies && formik.errors.hobbies && (
            <div>{formik.errors.hobbies}</div>
          )}
        </div>

  <div className="form-field">
    <Button type="submit">Submit</Button>
  </div>
</form>

    </div>
  );
};

export default Form;
