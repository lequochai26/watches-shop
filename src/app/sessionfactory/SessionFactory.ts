// Sessions storage initialization
const sessions: { [index: string]: any } = {};

// Functions:
export function getSession(id: string): any | undefined {
    return sessions[id];
}

export function generateSession(): [ string, any ] {
    // Generate id
    const id: string = new Date().getTime().toString();

    // Generate new session for given id
    sessions[id] = {};

    // Return
    return [ id, sessions[id] ];
}