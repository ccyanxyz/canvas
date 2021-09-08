export const idlFactory = ({ IDL }) => {
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    'status_code' : IDL.Nat16,
  });
  const Position = IDL.Record({ 'x' : IDL.Nat32, 'y' : IDL.Nat32 });
  const Color = IDL.Record({
    'a' : IDL.Nat8,
    'b' : IDL.Nat8,
    'g' : IDL.Nat8,
    'r' : IDL.Nat8,
  });
  return IDL.Service({
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'update_pixel' : IDL.Func([IDL.Nat32, Position, Color], [], []),
  });
};
export const init = ({ IDL }) => { return []; };