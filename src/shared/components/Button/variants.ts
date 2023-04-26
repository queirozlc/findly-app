interface ButtonStyles {
  button: {
    props: string
  }
  title: {
    props: string
  }
  loading?: {
    props: string
  }
}

interface ButtonVariant {
  enabled: ButtonStyles
  disabled: ButtonStyles
}

const solid: ButtonVariant = {
  enabled: {
    button: {
      props: 'bg-primary-500 rounded-full',
    },
    title: {
      props: 'text-dark-gray-500',
    },
    loading: {
      props: '#000',
    },
  },
  disabled: {
    button: {
      props: 'bg-primary-500/70 rounded-full',
    },
    title: {
      props: 'text-zinc-600',
    },
    loading: {
      props: '#000',
    },
  },
}

const outline: ButtonVariant = {
  enabled: {
    button: {
      props: 'border border-primary-500 rounded-full bg-transparent',
    },
    title: {
      props: 'text-primary-500',
    },
    loading: {
      props: '#000',
    },
  },
  disabled: {
    button: {
      props: 'border border-primary-500/70 rounded-full',
    },
    title: {
      props: 'text-zinc-600',
    },
    loading: {
      props: '#000',
    },
  },
}

export const variants = {
  solid,
  outline,
}
