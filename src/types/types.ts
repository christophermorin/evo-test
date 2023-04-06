export interface HeaderObject {
  id: string,
  first_name: string,
  last_name: string,
  gender: string,
  birth_date: string,
  home_phone: string,
  mobile_phone: string,
  work_phone: string,
  email: string,
  activity: {
    sms: number,
    email: number,
    orders: number
  },
  carrier_status: {
    since: string,
    status: string
  }
}

export interface OrdersObject {
  orders_A: [],
  orders_AA: [],
  orders_AAA: {
    sent: [
      {
        id: number,
        order_id: number,
        sent_dt: string,
        sent_tm: string,
        subject: {
          title: string,
          email: string
        },
        type: string,
      },
      {
        id: number,
        order_id: number,
        sent_dt: string,
        sent_tm: string,
        subject: {
          title: string,
          email: string,
        },
        type: string,
      }
    ]
  },
  orders_B: [],
  orders_C: []
}

export interface sentObject {
  id: number,
  order_id: number,
  sent_dt: string,
  sent_tm: string,
  subject: {
    title: string,
    email: string,
  },
  type: string
}

export interface RootState {
  headerData: HeaderDataState,
  ordersData: OrdersDataState
}

export type OrdersDataState = {
  data: OrdersObject;
  isLoading: boolean;
  error: string | null;
};

export type HeaderDataState = {
  data: HeaderObject;
  isLoading: boolean;
  error: string | null;
};

