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
      props: 'bg-primary-500 rounded-xl',
    },
    title: {
      props: 'text-dark-gray-500 font-poppins-semi',
    },
    loading: {
      props: '#000',
    },
  },
  disabled: {
    button: {
      props: 'bg-primary-500/70 rounded-xl',
    },
    title: {
      props: 'text-zinc-600 font-poppins-semi',
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
      props: 'text-primary-500 font-poppins-semi',
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
      props: 'text-zinc-600 font-poppins-semi',
    },
    loading: {
      props: '#000',
    },
  },
}

const oauthGoogle: ButtonVariant = {
  enabled: {
    button: {
      props: 'border border-dark-gray-500 rounded-full bg-transparent',
    },
    title: {
      props: 'text-black/50 font-inter-semi',
    },
    loading: {
      props: '#000',
    },
  },
  disabled: {
    button: {
      props: 'border border-dark-gray-500/70 rounded-full',
    },
    title: {
      props: 'text-zinc-600 font-inter-semi',
    },
    loading: {
      props: '#000',
    },
  },
}

const oauthFacebook: ButtonVariant = {
  enabled: {
    button: {
      props: 'bg-brand-blue-500 rounded-full',
    },
    title: {
      props: 'text-white font-inter-semi',
    },
  },
  disabled: {
    button: {
      props: 'bg-brand-blue-500/70 rounded-full',
    },
    title: {
      props: 'text-white font-inter-semi',
    },
  },
}

const authEmail: ButtonVariant = {
  enabled: {
    button: {
      props: 'bg-zinc-900 rounded-full',
    },
    title: {
      props: 'text-white font-inter-semi',
    },
  },
  disabled: {
    button: {
      props: 'bg-zinc-900/70 rounded-full',
    },
    title: {
      props: 'text-white font-inter-semi',
    },
  },
}

export const variants = {
  solid,
  outline,
  oauthGoogle,
  oauthFacebook,
  authEmail,
}
