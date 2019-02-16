// During development to manage front hot reload we must serve front and back on different IP
// front : 127.0.0.1
// back : 127.0.0.2
// Stuff to manage fetch for local development and production
// Way to use it : var resp = await fetch(hostname + pathname);
// example : var resp = await fetch(hostname +"/api");
const hostnames = {
  local: {
    front: "127.0.0.1",
    back: "127.0.0.2"
  }
};

var backHostname = "";
if(window.location.hostname == hostnames.local.front) {
  backHostname = "//" + hostnames.local.back
}

export const hostname = backHostname;