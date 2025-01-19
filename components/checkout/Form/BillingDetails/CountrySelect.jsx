"use client";

import { Select, SelectItem, Avatar } from "@heroui/react";
import Flag from "@/public/flag.png";

const COUNTRY_CODES = JSON.parse(
  `{"ad":"Andorra","ae":"United Arab Emirates","af":"Afghanistan","ag":"Antigua and Barbuda","ai":"Anguilla","al":"Albania","am":"Armenia","ao":"Angola","aq":"Antarctica","ar":"Argentina","as":"American Samoa","at":"Austria","au":"Australia","aw":"Aruba","ax":"Åland Islands","az":"Azerbaijan","ba":"Bosnia and Herzegovina","bb":"Barbados","bd":"Bangladesh","be":"Belgium","bf":"Burkina Faso","bg":"Bulgaria","bh":"Bahrain","bi":"Burundi","bj":"Benin","bl":"Saint Barthélemy","bm":"Bermuda","bn":"Brunei","bo":"Bolivia","bq":"Caribbean Netherlands","br":"Brazil","bs":"Bahamas","bt":"Bhutan","bv":"Bouvet Island","bw":"Botswana","by":"Belarus","bz":"Belize","ca":"Canada","cc":"Cocos (Keeling) Islands","cd":"DR Congo","cf":"Central African Republic","cg":"Republic of the Congo","ch":"Switzerland","ci":"Côte d'Ivoire (Ivory Coast)","ck":"Cook Islands","cl":"Chile","cm":"Cameroon","cn":"China","co":"Colombia","cr":"Costa Rica","cu":"Cuba","cv":"Cape Verde","cw":"Curaçao","cx":"Christmas Island","cy":"Cyprus","cz":"Czechia","de":"Germany","dj":"Djibouti","dk":"Denmark","dm":"Dominica","do":"Dominican Republic","dz":"Algeria","ec":"Ecuador","ee":"Estonia","eg":"Egypt","eh":"Western Sahara","er":"Eritrea","es":"Spain","et":"Ethiopia","eu":"European Union","fi":"Finland","fj":"Fiji","fk":"Falkland Islands","fm":"Micronesia","fo":"Faroe Islands","fr":"France","ga":"Gabon","gb":"United Kingdom","gb-eng":"England","gb-nir":"Northern Ireland","gb-sct":"Scotland","gb-wls":"Wales","gd":"Grenada","ge":"Georgia","gf":"French Guiana","gg":"Guernsey","gh":"Ghana","gi":"Gibraltar","gl":"Greenland","gm":"Gambia","gn":"Guinea","gp":"Guadeloupe","gq":"Equatorial Guinea","gr":"Greece","gs":"South Georgia","gt":"Guatemala","gu":"Guam","gw":"Guinea-Bissau","gy":"Guyana","hk":"Hong Kong","hm":"Heard Island and McDonald Islands","hn":"Honduras","hr":"Croatia","ht":"Haiti","hu":"Hungary","id":"Indonesia","ie":"Ireland","il":"Israel","im":"Isle of Man","in":"India","io":"British Indian Ocean Territory","iq":"Iraq","ir":"Iran","is":"Iceland","it":"Italy","je":"Jersey","jm":"Jamaica","jo":"Jordan","jp":"Japan","ke":"Kenya","kg":"Kyrgyzstan","kh":"Cambodia","ki":"Kiribati","km":"Comoros","kn":"Saint Kitts and Nevis","kp":"North Korea","kr":"South Korea","kw":"Kuwait","ky":"Cayman Islands","kz":"Kazakhstan","la":"Laos","lb":"Lebanon","lc":"Saint Lucia","li":"Liechtenstein","lk":"Sri Lanka","lr":"Liberia","ls":"Lesotho","lt":"Lithuania","lu":"Luxembourg","lv":"Latvia","ly":"Libya","ma":"Morocco","mc":"Monaco","md":"Moldova","me":"Montenegro","mf":"Saint Martin","mg":"Madagascar","mh":"Marshall Islands","mk":"North Macedonia","ml":"Mali","mm":"Myanmar","mn":"Mongolia","mo":"Macau","mp":"Northern Mariana Islands","mq":"Martinique","mr":"Mauritania","ms":"Montserrat","mt":"Malta","mu":"Mauritius","mv":"Maldives","mw":"Malawi","mx":"Mexico","my":"Malaysia","mz":"Mozambique","na":"Namibia","nc":"New Caledonia","ne":"Niger","nf":"Norfolk Island","ng":"Nigeria","ni":"Nicaragua","nl":"Netherlands","no":"Norway","np":"Nepal","nr":"Nauru","nu":"Niue","nz":"New Zealand","om":"Oman","pa":"Panama","pe":"Peru","pf":"French Polynesia","pg":"Papua New Guinea","ph":"Philippines","pk":"Pakistan","pl":"Poland","pm":"Saint Pierre and Miquelon","pn":"Pitcairn Islands","pr":"Puerto Rico","ps":"Palestine","pt":"Portugal","pw":"Palau","py":"Paraguay","qa":"Qatar","re":"Réunion","ro":"Romania","rs":"Serbia","ru":"Russia","rw":"Rwanda","sa":"Saudi Arabia","sb":"Solomon Islands","sc":"Seychelles","sd":"Sudan","se":"Sweden","sg":"Singapore","sh":"Saint Helena, Ascension and Tristan da Cunha","si":"Slovenia","sj":"Svalbard and Jan Mayen","sk":"Slovakia","sl":"Sierra Leone","sm":"San Marino","sn":"Senegal","so":"Somalia","sr":"Suriname","ss":"South Sudan","st":"São Tomé and Príncipe","sv":"El Salvador","sx":"Sint Maarten","sy":"Syria","sz":"Eswatini (Swaziland)","tc":"Turks and Caicos Islands","td":"Chad","tf":"French Southern and Antarctic Lands","tg":"Togo","th":"Thailand","tj":"Tajikistan","tk":"Tokelau","tl":"Timor-Leste","tm":"Turkmenistan","tn":"Tunisia","to":"Tonga","tr":"Turkey","tt":"Trinidad and Tobago","tv":"Tuvalu","tw":"Taiwan","tz":"Tanzania","ua":"Ukraine","ug":"Uganda","um":"United States Minor Outlying Islands","un":"United Nations","us":"United States","us-ak":"Alaska","us-al":"Alabama","us-ar":"Arkansas","us-az":"Arizona","us-ca":"California","us-co":"Colorado","us-ct":"Connecticut","us-de":"Delaware","us-fl":"Florida","us-ga":"Georgia","us-hi":"Hawaii","us-ia":"Iowa","us-id":"Idaho","us-il":"Illinois","us-in":"Indiana","us-ks":"Kansas","us-ky":"Kentucky","us-la":"Louisiana","us-ma":"Massachusetts","us-md":"Maryland","us-me":"Maine","us-mi":"Michigan","us-mn":"Minnesota","us-mo":"Missouri","us-ms":"Mississippi","us-mt":"Montana","us-nc":"North Carolina","us-nd":"North Dakota","us-ne":"Nebraska","us-nh":"New Hampshire","us-nj":"New Jersey","us-nm":"New Mexico","us-nv":"Nevada","us-ny":"New York","us-oh":"Ohio","us-ok":"Oklahoma","us-or":"Oregon","us-pa":"Pennsylvania","us-ri":"Rhode Island","us-sc":"South Carolina","us-sd":"South Dakota","us-tn":"Tennessee","us-tx":"Texas","us-ut":"Utah","us-va":"Virginia","us-vt":"Vermont","us-wa":"Washington","us-wi":"Wisconsin","us-wv":"West Virginia","us-wy":"Wyoming","uy":"Uruguay","uz":"Uzbekistan","va":"Vatican City (Holy See)","vc":"Saint Vincent and the Grenadines","ve":"Venezuela","vg":"British Virgin Islands","vi":"United States Virgin Islands","vn":"Vietnam","vu":"Vanuatu","wf":"Wallis and Futuna","ws":"Samoa","xk":"Kosovo","ye":"Yemen","yt":"Mayotte","za":"South Africa","zm":"Zambia","zw":"Zimbabwe"}`
);

const swappedObj = Object.fromEntries(
  Object.entries(COUNTRY_CODES).map(([key, value]) => [value, key])
);

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo (Democratic Republic)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function CountrySelect({modalForm, modalFormHandler, isCountryInvalid }) {
 
  return (
    <div className="w-full flex flex-row-reverse justify-start items-start gap-1  mt-2 ">
      {isCountryInvalid && ( <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse "> {"Required*"} </p> )}
      <Select
        className="max-w-md font-poppins"
        label="Select country"
        value={modalForm.country}
        onChange={modalFormHandler}
        name="country"
         
        isInvalid={isCountryInvalid}
      >
        {COUNTRIES.map((country) => {
          return <SelectItem className="font-poppins" key={country}>{country}</SelectItem>;
        })}
      </Select>
      
    </div>
  );
}





















// export default function CountrySelect({ register, errors }) {
//   return (
//     <>
//     <Select
//       className="max-w-xs"
//       label="Select country"
//       {...register("country", { required: { value: true, message: "Country is required!" }, })}
//     >
//       {COUNTRIES.map((country) => {
//         return (
//           <SelectItem
//             key={country}
//             startContent={
//               <Avatar
//                 alt={country}
//                 className="w-6 h-6"
//                 src={`https://flagcdn.com/${
//                   country in swappedObj ? swappedObj[country] : Flag.src
//                 }.svg`}
//               />
//             }
//           >
//             {" "}
//             {country}{" "}
//           </SelectItem>
//         );
//       })}
//     </Select>
//     {errors?.country && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.country.message}</p>}
//     </>
//   );
// }
