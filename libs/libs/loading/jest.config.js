module.exports = {
  name: 'loading',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/loading',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
