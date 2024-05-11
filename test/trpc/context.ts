import { type AppRouter, appRouter } from '~/server/api/root'
import { db } from '~/server/db'

export const createTestTRPCContext = async (userId = '') => {
  return {
    session: {
      user: {
        id: userId,
      },
      expires: '9999',
    },
    headers: new Headers(),
    db,
  }
}

export const getTestAPI = async (userId = ''): Promise<TestRouterCaller> => {
  const ctx = await createTestTRPCContext(userId)
  return appRouter.createCaller(ctx)
}

export type TestContext = Awaited<ReturnType<typeof createTestTRPCContext>>

export type TestRouterCaller = Awaited<ReturnType<AppRouter['createCaller']>>
