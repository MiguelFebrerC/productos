import 'dotenv/config';
import * as joi from 'joi';

interface Envs {
    PORT: number;
}

const envValidationSchema = joi.object({
    PORT: joi.number().required().default(3000),
}).unknown(true);

const { error, value } = envValidationSchema.validate(process.env);

if (error) {
    console.error('Config validation error:', error.message);
    process.exit(1);
}

const ensVars: Envs = value;

export const envs: Envs = {
    PORT: ensVars.PORT,
};