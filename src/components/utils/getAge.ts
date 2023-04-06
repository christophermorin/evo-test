export function getAge(birthDate: string): number {
  const birthYear = Number(birthDate.slice(0, 4))
  const yearNow = new Date().getFullYear()
  const currentAge = yearNow - birthYear

  return currentAge
}