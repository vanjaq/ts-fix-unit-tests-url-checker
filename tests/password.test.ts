import {calculatePasswordStrength} from "../src/password";

describe('Tests for password strength', () => {
    const Very_Weak: string = "Very Weak"
    const Weak: string = "Weak"
    const Moderate: string = "Moderate"
    const Strong: string = "Strong"

describe(`test for ${Very_Weak} passwords`, () => {
    test('password with only numbers', () => {
        expect(calculatePasswordStrength("123456")).toBe(Very_Weak)
    })

    test('empty password', () => {
        expect(calculatePasswordStrength(" ")).toBe(Very_Weak)
    })

    test('password with only letters', () => {
        expect(calculatePasswordStrength("qwerty")).toBe(Very_Weak)
    })
})

describe(`test ${Weak} passwords`, () => {
    test('passwords with more than 12 letters', () => {
        expect(calculatePasswordStrength("qwerasdfzxcvb")).toBe(Weak)
    })

    test('password with lowercase + uppercase letters', () => {
        expect(calculatePasswordStrength("Qw21")).toBe(Weak)
    })
})

 test('password with lowercase + uppercase letters + digit', () => {
        expect(calculatePasswordStrength("ABCDEF1!")).toBe(Moderate)
    })

  test('password with more then 12 symbols + special symbols + digit', () => {
      expect(calculatePasswordStrength("QwaS21!212121"))
  })
})