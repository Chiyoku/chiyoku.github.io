export interface Md {
  md: {
    fields: {
      desc: string;
      date: Date;
      title: string;
    };

    filename: string;
  };
}

export interface QueryRes {
  mds: {
    list: Md[];
  };
}
