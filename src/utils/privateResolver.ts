const privateResolver = (resolverFunction) => async (
  parent,
  args,
  context,
  info
) => {
  // console.log(context.req.user);
  if (!context.req.user) {
    throw new Error("No JWT. from privateResolver");
  }
  const resolved = await resolverFunction(parent, args, context, info);
  return resolved;
};

export default privateResolver;
