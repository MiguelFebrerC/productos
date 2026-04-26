import 'dotenv/config';

import * as joi from 'joi';

// const envSchema = joi.object({
//     PORT: joi.number().required().default(3000),
// }).unknown(true);

// const { error, value } = envSchema.validate(process.env);

// if (error) {
//     throw new Error(`Invalid environment variables: ${error.message}`);
// }

export const envs = {
    PORT: process.env.PORT,
};