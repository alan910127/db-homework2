const LETTER_REGEX = /^[a-zA-Z]+$/
const ALNUM_REGEX = /^[a-zA-Z0-9]+$/
const PHONE_REGEX = /^09[0-9]+/

const signupValidation = {
    data() {
        return {
            validationRules: {
                realname: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                        value => value.length === 0 || LETTER_REGEX.test(value) || 'Invalid name (letters only)'
                    ]
                },
                account: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields ',
                        value => value.length === 0 || ALNUM_REGEX.test(value) || 'Invalid account (letters + digits only)'
                    ]
                },
                phone: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                        value => value.length === 0 || (PHONE_REGEX.test(value) && value.length === 10) || 'Invalid phone number',
                    ]
                },
                password: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                        value => value.length === 0 || ALNUM_REGEX.test(value) || 'Invalid password (letters + digits only)'
                    ]
                },
                confirm: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                        value => value.length === 0 || ALNUM_REGEX.test(value) || 'Invalid password (letters + digits only)'
                    ]
                },
                latitude: {
                    rules: [
                        value => value !== null || 'Please fill in all fields',
                        value => (-90 <= value && value <= 90) || 'Invalid latitude (should be between -90 and 90)'
                    ]
                },
                longitude: {
                    rules: [
                        value => value !== null || 'Please fill in all fields',
                        value => (-180 <= value && value <= 180) || 'Invalid longitude (should be between -180 and 180)'

                    ]
                },
            }
        }
    },
    methods: {
        validateField(field, value) {
            return this.validationRules[field].rules.filter(
                rule => {
                    const isValid = rule(value);

                    if (isValid !== true) {
                        return isValid;
                    }
                }
            ).map(rule => rule(value));
        }
    }
};

export default signupValidation;