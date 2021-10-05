// Use with a function (namespace support enabled)

const isPatient = (resource: fhir4.Resource): resource is fhir4.Patient => {
  return resource.resourceType === 'Patient'
}