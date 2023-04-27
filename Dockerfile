FROM php:8.1-apache

# Installer les dépendances nécessaires et les extensions PHP
RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev \
        libicu-dev \
        libzip-dev \
        curl \
        unzip && \
    docker-php-ext-install \
        intl \
        zip \
        mysqli \
        pdo_mysql \
        opcache && \
    docker-php-ext-enable \
        intl \
        zip \
        mysqli \
        pdo_mysql \
        opcache && \
    a2enmod rewrite

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

# Tailwind
RUN npm install -D tailwindcss@latest
RUN npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

# Configurer le document root d'Apache
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# Modifier la configuration d'Apache pour utiliser le document root défini
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html
