import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      name: 'John',
      email: 'adminemail@test.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'useremail@test.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
  events: [
    // {
    //   name: 'Graduation',
    //   type: 'Celebration',
    //   date: '2023-10-01',
    //   visibility: 'Public',
    //   description: 'Graduation party for the class of 2023',
    //   id: 'd9168546-a844-4d8e-a73c-bdad723fe952,',
    // },
  ],
};

export default sampleData;
