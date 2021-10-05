// Use with async, fetch, promises

import { Patient } from "fhir/r4"

async function readPatient(id: string) {
  const response = await fetch(`http://hapi.fhir.org/baseR4/Patient/${id}`)

  if (!response.ok) throw new Error(await response.text());

  return await response.json() as Patient;
}

readPatient("123").then((patient: Patient) => {
  console.log(patient)
})