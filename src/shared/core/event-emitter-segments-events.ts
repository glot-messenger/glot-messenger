// Essences =============================================================================
export const COLUMN_EVENT_SEGMENT = '.column';
export const SLOT_EVENT_SEGMENT = '.slot';
export const MODAL_EVENT_SEGMENT = '.modal';

// Actions ==============================================================================
export const ADD_EVENT_SEGMENT = '.add';
export const DELETE_EVENT_SEGMENT = '.delete';
export const UPDATE_EVENT_SEGMENT = '.update';
export const CLEAR_EVENT_SEGMENT = '.clear';

// Composite ============================================================================
// SLOT
export const ADD_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + ADD_EVENT_SEGMENT;
export const DELETE_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + DELETE_EVENT_SEGMENT;
export const CLEAR_SLOT_EVENT_SEGMENT = SLOT_EVENT_SEGMENT + CLEAR_EVENT_SEGMENT;
// COLUMN
export const DELETE_COLUMN_EVENT_SEGMENT = COLUMN_EVENT_SEGMENT + DELETE_EVENT_SEGMENT;
export const UPDATE_COLUMN_EVENT_SEGMENT = COLUMN_EVENT_SEGMENT + UPDATE_EVENT_SEGMENT;