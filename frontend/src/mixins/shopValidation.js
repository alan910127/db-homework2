
const shopValidation = {
    data() {
        return {
            validationRules: {
                shopname: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                    ]
                },
                category: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
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
                }
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

export default shopValidation;