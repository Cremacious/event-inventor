import { insertEventSchema } from '../lib/validators';
import {z} from 'zod'

export type Event = z.infer<typeof insertEventSchema>;
    
