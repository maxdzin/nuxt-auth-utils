export default defineOAuthBattledotnetEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        battledotnet: user.battletag,
      },
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/')
  },
})
