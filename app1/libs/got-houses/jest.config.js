module.exports = {
  name: 'got-houses',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/got-houses',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
