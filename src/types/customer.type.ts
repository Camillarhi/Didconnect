export type CustomerType = {
  id?: string;
  author: string;
  name: string;
  contactNumber: string;
  email: string;
  avatar?: any;
  "@type": "customer";
};

export const CustomerTypeInitialFormValues: CustomerType = {
  author: "",
  name: "",
  email: "",
  contactNumber: "",
  "@type": "customer",
};
