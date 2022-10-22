-- CreateTable
CREATE TABLE `twitterHandle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `twitterHandle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `twitterSpace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `twitterSpaceLink` VARCHAR(191) NOT NULL,
    `twitterSpaceName` VARCHAR(191) NOT NULL,
    `spaceDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
