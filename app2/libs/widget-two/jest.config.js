module.exports = {
  name: 'widget-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widget-two',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
