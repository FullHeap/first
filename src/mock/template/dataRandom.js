import Mock from 'mockjs'
var Random = Mock.Random

Random.boolean()
Random.natural()
/* 数据占位符定义 */
Mock.mock(
    /* Random.boolean( min?, max?, current? ) */
    // Random.boolean()
    '@boolean',
    '@boolean()',
    '@boolean(1, 9, true)',
    
)