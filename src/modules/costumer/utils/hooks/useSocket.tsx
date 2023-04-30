import { API_URL } from '@env'
import { useMemo } from 'react'
import { io, Socket } from 'socket.io-client'

export default function useSocket() {
  const socket = useMemo<Socket>(() => io(`${API_URL}/costumer`), [])

  return {
    socket,
  }
}
