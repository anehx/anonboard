# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "anonboard.vm"

  config.hostsupdater.remove_on_suspend = true

  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.network "public_network"

  config.ssh.forward_agent = true

  config.vm.synced_folder ".", "/var/www"

  config.vm.provision :shell, :path => "tools/vagrant/setup.sh"
end
