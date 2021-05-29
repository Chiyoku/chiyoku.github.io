export interface Md {
  md: {
    fields: {
      desc: string;
      date: Date;
      title: string;
    };
  };
}

export interface QueryRes {
  mds: {
    list: Md[];
  };
}
