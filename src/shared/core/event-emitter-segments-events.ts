// Essences =============================================================================
export const COLUMN_EVENT_SEGMENT = '.column';
export const SLOT_EVENT_SEGMENT = '.slot';
export const MODAL_EVENT_SEGMENT = '.modal';
export const SOCIAL_NETWORK_EVENT_SEGMENT = '.social-network';
export const AUTHORIZATION_EVENT_SEGMENT = '.authorization';

// Actions ==============================================================================
export const ADD_EVENT_SEGMENT = '.add';
export const DELETE_EVENT_SEGMENT = '.delete';
export const UPDATE_EVENT_SEGMENT = '.update';
export const CLEAR_EVENT_SEGMENT = '.clear';
export const MOVING_EVENT_SEGMENT = '.moving';
export const SHOW_EVENT_SEGMENT = '.show';
export const LOG_OUT_SEGMENT = '.log-out';

// Directions ===========================================================================
export const DOWN_EVENT_SEGMENT = '.down';

// Composite ============================================================================
// SLOT
export const ADD_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + ADD_EVENT_SEGMENT;
export const DELETE_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + DELETE_EVENT_SEGMENT;
export const CLEAR_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + CLEAR_EVENT_SEGMENT;
export const MOVING_DOWN_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + MOVING_EVENT_SEGMENT + DOWN_EVENT_SEGMENT;
// COLUMN
export const DELETE_COLUMN_EVENT_SEGMENT = COLUMN_EVENT_SEGMENT + DELETE_EVENT_SEGMENT;
export const UPDATE_COLUMN_EVENT_SEGMENT = COLUMN_EVENT_SEGMENT + UPDATE_EVENT_SEGMENT;
export const ADD_COLUMN_EVENT_SEGMENT = COLUMN_EVENT_SEGMENT + ADD_EVENT_SEGMENT;
// SOCIAL NETWORK
export const SHOW_SOCIAL_NETWORK_EVENT_SEGMENT = SOCIAL_NETWORK_EVENT_SEGMENT + SHOW_EVENT_SEGMENT;
// AUTHORIZATION ACCOUNT
export const LOG_OUT_AUTHORIZATION_EVENT_SEGMENT = AUTHORIZATION_EVENT_SEGMENT + LOG_OUT_SEGMENT;
