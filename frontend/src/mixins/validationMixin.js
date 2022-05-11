import axios from "axios";

// const UPPER_REGEX = /[A-Z]+/
const DIGITS_REGEX = /09[0-9]+/

async function checkUserValidity(account) {
    const response = await axios.get(`/getuser/${account}`);
    return response.data;
}

const validationMixin = {
    data() {
        return {
            validationRules: {
                realname: {
                    rules: [
                        value => value.length > 3 || 'Please fill in all fields!',
                    ]
                },
                account: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields!',
                        value => checkUserValidity(value).then(data => Object.keys(data).length).then(len => len === 0) || 'This account already exists.',
                    ]
                },
                phone: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields!',
                        value => (DIGITS_REGEX.test(value) && value.length === 10) || 'Invalid phone number!',
                    ]
                },
                password: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields!',
                    ]
                },
                confirm: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields!',
                    ]
                },
                latitude: {
                    rules: [
                        value => value !== null || 'Please fill in all fields!',
                    ]
                },
                longitude: {
                    rules: [
                        value => value !== null || 'Please fill in all fields!',
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

export default validationMixin;