export type CustomerType = {
  id?: string;
  author: string;
  name: string;
  contactNumber: string;
  email: string;
  avatar?: any;
  passKey: string;
  "@type": "customer";
};

export const CustomerTypeInitialFormValues: CustomerType = {
  author: "",
  name: "",
  email: "",
  contactNumber: "",
  passKey: "",
  "@type": "customer",
};
