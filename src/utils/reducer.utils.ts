export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Overload creatAction for without payload actions
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// Overload creatAction for with payload actions
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction(type: unknown, payload: unknown) {
  return {
    type,
    payload,
  };
}
