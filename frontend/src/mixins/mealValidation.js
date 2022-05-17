const mealValidation = {
    data() {
        return {
            validationRules: {
                mealname: {
                    rules: [
                        value => value.length > 0 || 'Please fill in all fields',
                    ]
                },
                price: {
                    rules: [
                        value => value !== null || 'Please fill in all fields',
                        value => value >= 0 || 'Price must be nonnegative',
                    ]
                },
                quantity: {
                    rules: [
                        value => value !== null || 'Please fill in all fields',
                        value => value >= 0 || 'Quantity must be nonnegative',
                    ]
                },
                file: {
                    rules: [
                        value => value.length > 0 || 'Please choose a picture',
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

export default mealValidation;