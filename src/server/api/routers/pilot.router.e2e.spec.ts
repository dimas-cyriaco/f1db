import { type inferProcedureInput } from '@trpc/server'
import { beforeEach, describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'

import { type AppRouter } from '~/server/api/root'
import { db } from '~/server/db'
import { getTestAPI, type TestRouterCaller } from 'test/trpc/context'
import { type Person } from '@prisma/client'

type Input = inferProcedureInput<AppRouter['pilot']['create']>

describe('pilot Router', () => {
  let api: TestRouterCaller

  beforeEach(async () => {
    api = await getTestAPI()

    await db.person.deleteMany()
  })

  it('create', async () => {
    // Arrange

    const name = faker.person.fullName()

    const input: Input = {
      name,
    }

    // Act

    const result: Person = await api.pilot.create(input)

    // Assert

    const expected = {
      name,
    }

    expect(result).toMatchObject(expected)
  })
})
