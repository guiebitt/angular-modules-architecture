module.exports = {
  name: 'widget-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widget-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
