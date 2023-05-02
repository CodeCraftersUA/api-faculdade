export default interface professor {
  name: string,
  address: string,
  specialty: string
  // eslint-disable-next-line semi
}

interface GetProfessorInterface {
  id: string,
  name: string,
  specialty: string,
  address: string
}

export { GetProfessorInterface };