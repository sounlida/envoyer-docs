module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction'],
    },
    {
        title: "Accounts",
        collapsable: false,
        children: prefix('accounts', [
          'your-account',
          'source-control',
        ]),
    },
    {
        title: "Projects",
        collapsable: false,
        children: prefix('projects', [
          'projects',
          'servers',
          'deployment-hooks',
          'heartbeats',
          'notifications',
          'collaborators',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
